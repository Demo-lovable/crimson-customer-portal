
import { Customer } from "./mockData";

export const exportCustomersToCSV = (customers: Customer[]): void => {
  // Define columns to be exported
  const headers = [
    "Name",
    "Surname",
    "Email",
    "Card Reference",
    "Token",
    "UUID",
    "Type"
  ];

  // Create CSV content
  const csvContent = [
    headers.join(","),
    ...customers.map(customer => [
      customer.name,
      customer.surname,
      customer.email,
      customer.cardRef,
      customer.token,
      customer.uuid,
      customer.type
    ].join(","))
  ].join("\n");

  // Create download link
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  
  // Set link properties
  link.setAttribute("href", url);
  link.setAttribute("download", `customer-data-${new Date().toISOString().slice(0, 10)}.csv`);
  link.style.visibility = "hidden";
  
  // Add link to document, trigger click, then remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
