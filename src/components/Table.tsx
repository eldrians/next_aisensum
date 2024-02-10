import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    name: "axel",
    instagram: "@instagram",
    color: "blue",
  },
  {
    id: "2",
    name: "eldrian",
    instagram: "@instagra",
    color: "red",
  },
  {
    id: "3",
    name: "hadiwibowo",
    instagram: "@instagram",
    color: "violet",
  },
  {
    id: "4",
    name: "ella",
    instagram: "@instagram",
    color: "red",
  },
  {
    id: "5",
    name: "ismalina",
    instagram: "@instagram",
    color: "black",
  },
  // {
  //   id: "6",
  //   name: "aldrin",
  //   instagram: "@instagram",
  //   color: "blue",
  // },
  // {
  //   id: "7",
  //   name: "hadiwibowo",
  //   instagram: "@instagram",
  //   color: "black",
  // },
];

const TableComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Instagram</TableHead>
          <TableHead className="text-right">Colour</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.instagram}</TableCell>
            <TableCell className="text-right">{invoice.color}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
