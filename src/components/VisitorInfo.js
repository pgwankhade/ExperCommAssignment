import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom';
import { useState} from 'react'
const VisitorInfo = () => {
    const history = useHistory()
    const year= new Date().getFullYear()
    const month= new Date().getMonth()
    const day= new Date().getDate()
    const initialFieldValues = {
        name: '',
        email: '',
        person: '',
        date: `${year}/${month}/${day}`,
        typeofentry: null,
        timeEntry: null,
        timeExit: '',
        image: {},
    }
    var [values, setValues] = useState(initialFieldValues)
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFileChange = e => {
        const file = e.target.files[0];
        if (e.target.files[0]) {
            console.log(e.target.files[0])
            var { name } = e.target;
            getBase64(file).then(base64 => {
                setValues({
                    ...values,
                    [name]: base64 
                })
              });
        }
    }

    const onsubmitdata =(e)=>{
        const data = localStorage.getItem("visitordata")
        if (data) {
            const updated = [...JSON.parse(data), values]
            localStorage.setItem("visitordata", JSON.stringify(updated))
        }
        else {
            localStorage.setItem("visitordata", JSON.stringify([values]))
        }
       
        history.push("/VisitorList")
    }

    return (
        <Card style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}>
            <h1 className="titlenews">Visitor Info</h1>
        <div className="visitorinfo space-between row">
        <label>Name:
            <input placeholder="Name" type="text" name="name" value={values.name} onChange={handleInputChange}></input>
            </label>
            <label>
                email:
            <input placeholder="Email" type="email" name="email" value={values.email} onChange={handleInputChange}></input>
            </label>
            <label>
                type:
            <select name="typeofentry" value={values.typeofentry} onChange={handleInputChange}>
                <option value="Meeting">Meeting</option>
                <option value="Delivery">Delivery</option>
                <option selected value="Personal">Personal</option>
            </select>
            </label>
            <label>
                Person:
               <input placeholder="Person to Visit" type="text" name="person" value={values.person} onChange={handleInputChange}></input>
            </label>
            <label>
                Date:
            <input placeholder="date of entry" type="text" value={values.date}></input>
            </label>
            <label>
                EntryTime:
            <input placeholder="time of exit" type="time" name="timeEntry" value={values.timeEntry} onChange={handleInputChange}></input>
            </label>
            <label>ExitTime:
            <input placeholder="time of exit" type="time" name="timeExit" value={values.timeExit} onChange={handleInputChange}></input>
            </label>
            <label>
                Image:
            <input placeholder="image" type="file" name="image" onChange={handleFileChange}></input>
            </label>
        </div>
         <Button onClick={onsubmitdata}> Submit </Button>
        </Card>
    )
}

const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

export default VisitorInfo