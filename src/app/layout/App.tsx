import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Activity } from "../../models/activity";
import Navbar from "./Navbar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((res) => {
        console.log(res);
        setActivities(res.data);
      });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <List>
          {activities.map((activity: Activity) => {
            return <List.Item key={activity.id}>{activity.title}</List.Item>;
          })}
        </List>
      </Container>
    </Fragment>
  );
}

export default App;
