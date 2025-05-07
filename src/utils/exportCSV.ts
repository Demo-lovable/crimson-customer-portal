
import { Customer } from "./mockData";

export function exportCustomersToCSV(customers: Customer[]): void {
  // Define CSV headers
  const headers = ["Name", "Surname", "Email", "Card Reference"];
  
  // Map customer data to CSV rows
  const csvData = customers.map(customer => [
    customer.name,
    customer.surname,
    customer.email,
    customer.cardRef
  ]);
  
  // Combine headers and data
  const csvContent = [
    headers.join(","),
    ...csvData.map(row => row.join(","))
  ].join("\n");
  
  // Create a Blob with the CSV content
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
  // Create a download link
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  // Set link properties
  link.setAttribute("href", url);
  link.setAttribute("download", "customer-list.csv");
  link.style.visibility = "hidden";
  
  // Append to document, trigger click, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
