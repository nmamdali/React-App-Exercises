
const StudentsList = () => {
  const StudentList = [
    { id: "123",name: "Ahmed" },
    { id: "124",name: "Ali" },
    { id: "125",name: "Anas" }
    ];
  return (
    <div>
      <h3>Students Name</h3>
      <select id='stdlist'>
        {StudentList.map((std) => {
          return <option>{std.name}</option>;
        })}
      </select>     
    </div>

  );
};

export default StudentsList;