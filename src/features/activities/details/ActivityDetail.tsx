import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
}

const ActivityDetail = ({ activity, cancelSelectActivity }: Props) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}`}
        wrapped
        ui={false}
      />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span className="date">{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" />
          <Button
            onClick={cancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </CardContent>
    </Card>
  );
};

export default ActivityDetail;
