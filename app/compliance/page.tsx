"use client";

import { useState, useMemo } from "react";
import { reports } from "@/constants/data/compliance/compliance-reports";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 10;

function toS3Path(url: string) {
  return url.replace(/ /g, "+");
}

export default function CompliancePage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"FC" | "Others">("FC");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const byTab = reports.filter((r) => r.category === activeTab);
    return q ? byTab.filter((r) => r.label.toLowerCase().includes(q)) : byTab;
  }, [search, activeTab]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  function handleTabChange(value: string) {
    setActiveTab(value as "FC" | "Others");
    setPage(1);
    setSearch("");
  }

  return (
    <div className="w-full max-w-5xl min-w-0 mx-auto sm:px-6 pb-12 pt-4 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Compliance</h1>
        <p className="text-muted-foreground text-md max-w-3xl mx-auto">
          DSWS upholds the highest standards of financial accountability and
          governance. Below you will find our audited financial statements and
          annual reports, made available to ensure full transparency with our
          donors, partners, and the communities we serve.
        </p>
      </div>

      <div className="space-y-3">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="FC" className="w-32">FC</TabsTrigger>
            <TabsTrigger value="Others" className="w-32">Others</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Search */}
        <div className="relative max-w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search reports..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Reports Table */}
        <div className="rounded-lg border overflow-hidden">
          <Table className="min-w-[480px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 text-center">#</TableHead>
                <TableHead>Report</TableHead>
                <TableHead className="w-28 text-right pr-6">Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length > 0 ? (
                paginated.map((report, i) => {
                  const globalIndex = (currentPage - 1) * PAGE_SIZE + i + 1;
                  return (
                    <TableRow key={report.url}>
                      <TableCell className="text-center text-muted-foreground">
                        {globalIndex}
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-2 font-medium">
                          <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                          {report.label}
                        </span>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <a
                          href={`${process.env.NEXT_PUBLIC_AWS_S3_URL}${toS3Path(report.url)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 underline-offset-4 hover:underline"
                        >
                          View PDF
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="py-10 text-center text-muted-foreground"
                  >
                    No reports match your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs md:text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium">
              {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
              {Math.min(currentPage * PAGE_SIZE, filtered.length)}
            </span>{" "}
            of <span className="font-medium">{filtered.length}</span> reports
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </Button>
            <span className="text-xs md:text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
