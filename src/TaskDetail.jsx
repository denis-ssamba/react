import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoaderIcon from "./Components/loader.gif";
import Button from "./Components/Button";
import { SharedData } from ".";

const TaskDetail = () => {
  const { taskId } = useParams();
  const [taskDetail, setTaskDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const userShared = useContext(SharedData);
  useEffect(() => {
    const fetchTaskDetail = async () => {
      //console.log("object", data);
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/" + taskId
        );
        if (data.status == 200) {
          //console.log("here ");
          //throw new Error();
          setTaskDetail(data.data);
          setLoading(false);
          //console.log("data", data.data);
        } else {
          console.log("someting well wrong");
        }
      } catch (Error) {
        console.log("error", Error);
        setLoading(false);
        setError(Error.message);
      }
    };
    fetchTaskDetail();
  }, []);

  const handleNavigation = () => {
    navigate(-1);
  };
  return (
    <div>
      {loading ? (
        <img src={LoaderIcon} alt="loading icon" />
      ) : (
        <div>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <>
              {" "}
              <h1>Task Details</h1>
              <div>
                <span>Task Id </span> :{taskId}
              </div>
              <div>
                <span>User Id </span> : {taskDetail.userId}
              </div>
              <div>
                <span>Title : {taskDetail.title}</span>
              </div>
              <div>
                <span>Status </span> :{" "}
                {taskDetail.completed ? "Completed" : "Not completed"}
              </div>
              {userShared}
              <Button type="submit" name="back" OnClick={handleNavigation} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
