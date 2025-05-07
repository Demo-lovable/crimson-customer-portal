
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Copy, FileText, Wallet, Plane, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Customer, customers } from "@/utils/mockData";
import { exportCustomersToCSV } from "@/utils/exportCSV";

const CustomerTable: React.FC = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterType, setFilterType] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Calculate pagination
  const filteredCustomers = filterType 
    ? customers.filter(customer => customer.type === filterType)
    : customers;
    
  const totalPages = Math.ceil(filteredCustomers.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleCustomers = filteredCustomers.slice(startIndex, startIndex + pageSize);
  
  const handleExportCSV = () => {
    exportCustomersToCSV(filteredCustomers);
    toast({
      title: "Export successful",
      description: "Customer data has been exported as CSV file",
    });
  };
  
  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copied",
      description: "Email address copied to clipboard",
    });
  };
  
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  
  const handlePageSizeChange = (value: string) => {
    setPageSize(parseInt(value, 10));
    setCurrentPage(1); // Reset to first page when changing page size
  };
  
  const handleFilterChange = (type: string | null) => {
    setFilterType(type);
    setCurrentPage(1); // Reset to first page when filter changes
  };
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customer List</h1>
        <Button 
          className="bg-accent hover:bg-accent/90 text-white" 
          onClick={handleExportCSV}
        >
          <FileText className="mr-2 h-4 w-4" />
          Export as CSV
        </Button>
      </div>
      
      <div className="flex gap-2 mb-4">
        <Button
          variant={filterType === 'wallet' ? 'default' : 'outline'}
          onClick={() => handleFilterChange(filterType === 'wallet' ? null : 'wallet')}
          className={filterType === 'wallet' ? 'bg-accent hover:bg-accent/90' : ''}
        >
          <Wallet className="mr-2 h-4 w-4" />
          Wallet
        </Button>
        
        <Button
          variant={filterType === 'tour' ? 'default' : 'outline'}
          onClick={() => handleFilterChange(filterType === 'tour' ? null : 'tour')}
          className={filterType === 'tour' ? 'bg-accent hover:bg-accent/90' : ''}
        >
          <Plane className="mr-2 h-4 w-4" />
          Tour
        </Button>
        
        <Button
          variant={filterType === 'dining' ? 'default' : 'outline'}
          onClick={() => handleFilterChange(filterType === 'dining' ? null : 'dining')}
          className={filterType === 'dining' ? 'bg-accent hover:bg-accent/90' : ''}
        >
          <Utensils className="mr-2 h-4 w-4" />
          Dining
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Surname</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Card Reference</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>UUID</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.surname}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.cardRef}</TableCell>
                <TableCell>{customer.token || 'N/A'}</TableCell>
                <TableCell>{customer.uuid || 'N/A'}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyEmail(customer.email)}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Email
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Rows per page</p>
          <Select
            value={pageSize.toString()}
            onValueChange={handlePageSizeChange}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages || 1}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
