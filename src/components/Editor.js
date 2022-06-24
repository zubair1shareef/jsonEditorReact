import React,{useState,useEffect} from 'react'
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import axios from "axios"


// const api="https://crudcrud.com/api/d9ef4b4aadf24c268bf0e48d14452556"
// const api2="https://crudcrud.com/api/02f909b06da3430aa8e155c30c48a89a/data/62b598996f047803e8aea008"
const json = {


    userType: "",
    card: {
      cardToken: "",
      expirationMonth: "05",
      expirationYear: "2019",
      cardType: "CREDIT",
      bin: "123456",
      cardBrand: "LOCAL BRAND",
      issuingOrganization: "",
      cardCategory: "UATP",
      issuingCountryCode: "NI",
      issuingOrgWebsite: "",
      issuingOrgPhone: "",
      panReserved: "14",
      commercial: "COMMERCIAL",
      regulated: "N"
    },
    billTo: {
      firstName: "Jim",
      lastName: "He",
      street1: "",
      street2: "",
      city: "Shanghai",
      state: "Shanghai",
      postalCode: "201304",
      country: "CN",
      email: "jim631@sina.com"
    },
    merchant: {
      id: "19621303213"
    }
  };

const Editorjson = () => {
    const [Data, setData] = useState({})
    const handleChange = (v) => {
        setData(v)
        console.log(Data);
      };


      function saveData(){
        console.log(Data)
//         axios.put(`${api2}`,{
//     json,
    
//   }).then(console.log("saved"))
     }

    //   useEffect(()=>{
    //     axios.get(api2).then((data=>{
    //         console.log(data.data.json)
    //         setData(data.data.json)
    //     }))
    //   },[])

    
      return (
        <div className="App" style={{height:"80vh"}}>
            <h1>JSON EDITOR</h1>
        <Editor
          value={json}
          onChange={handleChange}
        
          theme="ace/theme/github"
        />
      
      <button onClick={saveData}> saved</button>
      </div>
      
      );
}

export default Editorjson