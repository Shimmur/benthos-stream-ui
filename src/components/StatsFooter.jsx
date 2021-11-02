import { useContext } from "react";
import { Badge, Card, CardBody } from "@windmill/react-ui";
import { StatsContext } from "../cache/stats";
import { useInterval } from "../hooks/useInterval";

export const StatsFooter = () => {
  const {
    stats: {
      stats: { uptime, goroutines },
      loadStats,
    },
  } = useContext(StatsContext);

  useInterval(() => {
    loadStats();
  }, 30000);

  return (
    <footer>
      <Card>
        <CardBody className="flex flex-row justify-between">
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
          <small className="text-right">
            <Badge type="neutral">refreshes every 30s</Badge>
          </small>
        </CardBody>
      </Card>
    </footer>
  );
};
