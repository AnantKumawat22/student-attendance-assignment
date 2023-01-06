import { useState } from "react";

function App() {
  const [allinp, setAllInp] = useState({
    rollno: "",
    name: "",
    checkin: "",
    checkout: "",
  });
  const [sno, setNo] = useState(1);

  const addStudent = () => {
    const alert = document.getElementById("alert-div");
    const alertmsg = document.getElementById("alertmsg");

    if (
      allinp.name == "" ||
      allinp.rollno == "" ||
      allinp.checkin == "" ||
      allinp.checkout == ""
    ) {
      alert.style.display = "block";
      alertmsg.innerHTML = "Error: All Fields are Required.";
      alert.style.backgroundColor = "rgb(210, 39, 39)";

      setTimeout(() => {
        alert.style.display = "none";
      }, "3000");
      return;
    }

    let newSno = sno + 1;

    console.log(allinp);
    setNo(newSno);
    setAllInp({
      rollno: "",
      name: "",
      checkin: "",
      checkout: "",
    });

    const tableobj = document.getElementsByClassName("attendance-table")[0];

    // Create Row
    let row = document.createElement("tr");

    // Create cells
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");

    // Insert data to cells
    c1.innerText = sno;
    c2.innerText = allinp.rollno;
    c3.innerText = allinp.name;
    c4.innerText = allinp.checkin;
    c5.innerText = allinp.checkout;

    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);

    // Append row to table body
    tableobj.appendChild(row);

    // Alert
    alert.style.display = "block";
    alertmsg.innerHTML = "Success: Student Added Successfully.";
    alert.style.backgroundColor = "rgb(12, 180, 12)";

    setTimeout(() => {
      alert.style.display = "none";
    }, "3000");
  };

  const setInp = (e) => {
    setAllInp({ ...allinp, [e.target.name]: e.target.value });
  };

  return (
    <>
      <nav className="navbar">
        <h2 className="navbar-title">Student Attendance</h2>
      </nav>

      <div id="alert-div">
        <p id="alertmsg"></p>
      </div>

      <div className="std-detail">
        <h1 className="std-detail-title">Enter Student Details</h1>
        <div className="inpfield">
          <label htmlFor="rollno">Enter Roll No *</label>
          <input
            type="text"
            value={allinp.rollno}
            onChange={setInp}
            placeholder="Enter Student Roll No."
            name="rollno"
            id="rollno"
          />
        </div>

        <div className="inpfield">
          <label htmlFor="name">Enter Name *</label>
          <input
            type="text"
            value={allinp.name}
            onChange={setInp}
            placeholder="Enter Student Name"
            name="name"
            id="name"
          />
        </div>

        <div className="inpfield">
          <label htmlFor="checkin">Select Checkin Time *</label>
          <input
            type="time"
            value={allinp.checkin}
            onChange={setInp}
            name="checkin"
            id="checkin"
          />
        </div>

        <div className="inpfield">
          <label htmlFor="checkout">Select Checkout Time *</label>
          <input
            type="time"
            value={allinp.checkout}
            onChange={setInp}
            name="checkout"
            id="checkout"
          />
        </div>

        <button className="addbtn" onClick={addStudent}>
          Add Student
        </button>
      </div>

      <div className="attendance-sheet">
        <h1 style={{ color: "#656161" }}>Attendance Sheet</h1>
        <p style={{ marginTop: "20px" }}>
          Total Students are there in the school right now : {sno - 1}{" "}
        </p>
        <table className="attendance-table">
          <thead>
            <td>S.No.</td>
            <td>Roll No.</td>
            <td>Name</td>
            <td>Checkin Time</td>
            <td>Checkout Time</td>
          </thead>

          {/* <tr>
            <td>1.</td>
            <td>0905CS191036</td>
            <td>Anant Kumawat</td>
            <td>11:00 AM</td>
            <td>5:00 PM</td>
          </tr> */}
        </table>
      </div>
    </>
  );
}

export default App;
