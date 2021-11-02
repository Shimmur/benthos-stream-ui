import { useContext } from "react";
import { Badge, Card, CardBody } from "@windmill/react-ui";
import { StatsContext } from "../cache/stats";

export const StatsFooter = () => {
  const {
    stats: {
      stats: { uptime, goroutines },
    },
  } = useContext(StatsContext);

  return (
    <footer>
      <Card>
        <CardBody>
          <small>
            <Badge>
              <code>goroutines: </code>
            </Badge>{" "}
            {goroutines}{" "}
            <Badge>
              <code>uptime: </code>
            </Badge>{" "}
            {uptime}
          </small>
        </CardBody>
      </Card>
    </footer>
  );
};
