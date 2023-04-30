import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable, {
  TableColumn,
  defaultThemes,
} from "react-data-table-component";

interface Client {
  cellPhone: string;
  createdAt: Date;
  email: string;
  id: number;
  lastNames: string;
  names: string;
  numberOfTickets: number;
}

const customStyles = {
  header: {
    style: {
      minHeight: "56px",
    },
  },
  headRow: {
    style: {
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
};

const columns: TableColumn<Client>[] = [
  {
    name: "ID",
    selector: (row: { id: any }) => row.id,
  },
  {
    name: "Nombre(s)",
    selector: (row: { names: any }) => row.names,
  },
  {
    name: "Apellido(s)",
    selector: (row: { lastNames: any }) => row.lastNames,
  },
  {
    name: "E-mail",
    selector: (row: { email: any }) => row.email,
  },
  {
    name: "Teléfono",
    selector: (row: { cellPhone: any }) => row.cellPhone,
  },
  {
    name: "Cant. Tickets",
    selector: (row: { numberOfTickets: any }) => row.numberOfTickets,
  },
];

const ClientsByEvent = () => {
  const [clients, setClients] = useState([]);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    axios.get("https://api.kaudalcultural.cl/clients").then((res) => {
      console.log(res.data);
      setClients(res.data);
      setPending(false);
    });
  }, []);
  return (
    <>
      <DataTable
        title="Lista de asistentes"
        columns={columns}
        data={clients}
        progressPending={pending}
        customStyles={customStyles}
        dense
        highlightOnHover
      />
    </>
  );
};

export default ClientsByEvent;
