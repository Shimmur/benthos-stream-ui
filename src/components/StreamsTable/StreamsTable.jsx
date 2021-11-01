import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '@windmill/react-ui'
import { StreamsRows } from './StreamsRows'

export const StreamsTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="w-2">Status</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <StreamsRows />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
