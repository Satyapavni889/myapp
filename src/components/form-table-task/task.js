import React,{useState} from 'react'
import Table from './task-table'

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.username, formData.password);

    const userform = {
      username: formData.username,
      password: formData.password,
    };

    const isUserExists = tableData.find(
      (eachRow) =>
        eachRow.username === formData.username &&
        eachRow.password === formData.password
    );
    if (!isUserExists) {
      console.log(userform);
      setTableData([...tableData, userform]);
      setFormData({ username: "", password: "" });
    }
  };
  return (
    <><form onClick={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    value={formData.username}
    name={"username"}
    onChange={handleChange}
    />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
     value={formData.password}
     name={"password"}
     onChange={handleChange}
     />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<Table tableRows={tableData}/>

</>
  )
    }

export default Form
