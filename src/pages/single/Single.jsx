import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img
                className="itemImg"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="profile image"
              />
              <div className="details">
                <div className="itemTitle">Jande Doe</div>
                <div className="itemDetail">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">234 Garden Yd. New York NY</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User spending (last 6 Months)" aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
