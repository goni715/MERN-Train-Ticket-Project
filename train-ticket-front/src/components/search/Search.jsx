import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Typeahead } from 'react-bootstrap-typeahead';

const options = [
    "Chilahati",
    "Domar",
    "Nilphamari",
    "Saidpur",
    "Parbatipur",
    "Fulbari",
    "Birampur",
    "Joypurhat",
    "Akkelpur",
    "Santahar",
    "Ahsanganj",
    "Natore",
    "Ishwardi",
    "Bheramara",
    "Poradaha",
    "Alamdanga",
    "Chuadanga",
    "Darshana_Halt",
    "Kotchandpur",
    "Jashore",
    "Noapara",
    "Daulatpur",
    "Khulna",
    "Dhaka",
    "Rajshahi",
    "Ullapara",
    "Joydebpur",
    "Dhaka Bimanbandor"
];
const Search = () => {
   const [from, setFrom] = useState("");
   const [to, setTo] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const endDate = new Date().setDate(Number(new Date().getDate()) + 4);
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        if(from && to){
            // const myDate = selectedDate.toLocaleDateString().slice(0,10);
            const myDate = selectedDate.toISOString().slice(0,10);//UTC Time //InterNational Time
            navigate(`/search/${from}/${to}/${myDate}`);
        }
    }

    return (

        <>




            <br/><br/>
            <div className="p-5">
              <form onSubmit={handleSubmit}>
                  <div className="input-group">
                      <Typeahead
                          id="pagination-example"
                          options={options}
                          onChange={(selected) =>{
                              setFrom(selected[0]);
                          }}
                          minLength={2}
                          placeholder="Select From Station"
                      />
                  </div>
                  <br/> <br/>
                  <div className="input-group">
                      <Typeahead
                          id="pagination-example"
                          options={options}
                          onChange={(selected) =>{
                              setTo(selected[0]);
                          }}
                          minLength={2}
                          placeholder="Select To Station"
                      />
                  </div>
                <br/> <br/>
                <DatePicker
                    minDate={new Date()}
                    maxDate={endDate}
                    selected={selectedDate}
                    onChange={(date)=>setSelectedDate(date)}
                    dateFormat="dd-MMM-yy"
                />
                <br/> <br/>
                <button type="submit" className="btn btn-primary">Search</button>
               </form>
            </div>
        </>
    );
};

export default Search;