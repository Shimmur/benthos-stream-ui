import { TableRow, TableCell } from "@windmill/react-ui";
import { Link } from "react-router-dom";

export const StreamsRow = ({ id, active, uptime }) => {
  const minutes = Math.floor(uptime / 60);
  const seconds = Math.floor(uptime - minutes * 60);
  const displayUptime = `${minutes}m ${seconds}s`;

  return (
    <TableRow className="cursor-pointer">
      <TableCell className={active ? "bg-green-400" : "bg-gray-300"}>
        <Link to={`/streams/${id}`}>{active ? "active" : "stopped"}</Link>
      </TableCell>
      <TableCell>
        <Link to={`/streams/${id}`}>
          <div className="flex items-center text-sm">
            <span className="font-semibold ml-2">{id}</span>
          </div>
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/streams/${id}`}>
          <span>{displayUptime}</span>
        </Link>
      </TableCell>
    </TableRow>
  );
};
