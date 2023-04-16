import "./App.css";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import BodyHeader from "./component/bodyHeader";
import MainBody from "./component/MainBody";



function App(){
  const subheading = [
    {
      heading:
        "Black and White with Sudhir Chaudhary: Atiq Ahmed की हत्या या वध? देखिए इसका विश्लेषण",
      chaneelName: "News Channel",
      views: "228k",
      time: "2hours Ago",
    },
    {
      heading:
        "Black and White with Sudhir Chaudhary: Atiq Ahmed की हत्या या वध? देखिए इसका विश्लेषण",
      chaneelName: "News Channel",
      views: "228k",
      time: "2hours Ago",
    },
    {
      heading:
        "Black and White with Sudhir Chaudhary: Atiq Ahmed की हत्या या वध? देखिए इसका विश्लेषण",
      chaneelName: "News Channel",
      views: "228k",
      time: "2hours Ago",
    },
    {
      heading:
        "Black and White with Sudhir Chaudhary: Atiq Ahmed की हत्या या वध? देखिए इसका विश्लेषण",
      chaneelName: "News Channel",
      views: "228k",
      time: "2hours Ago",
    },
    {
      heading:
        "Black and White with Sudhir Chaudhary: Atiq Ahmed की हत्या या वध? देखिए इसका विश्लेषण",
      chaneelName: "News Channel",
      views: "228k",
      time: "2hours Ago",
    },
    {
      heading:
        "Black and White with Sudhir Chaudhary: Atiq Ahmed की हत्या या वध? देखिए इसका विश्लेषण",
      chaneelName: "News Channel",
      views: "228k",
      time: "2hours Ago",
    },
  ];
  const array = [
    "All",
    "Lofi",
    "music",
    "react",
    "code",
    "javascript",
    "react",
    "code",
    "javascript",
  ];
  return (
    <div className="App">
      <Header />
      <Sidebar />
    
       <div className="container d-flex justify-content-between bg-dark text-white py-2">
        {array.map((e) => (
          <BodyHeader data={e} />
        ))}
      </div>
      <div className="mainbody container bg-dark text-white ">
        {subheading.map((e) => (
          <MainBody heading={e.heading} chaneelName={e.chaneelName} views={e.views} time={e.time}/>
        ))}
      </div> 
      </div>
   
  );
}

export default App;
