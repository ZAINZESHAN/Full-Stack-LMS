import { BatchDialog } from "@/components/Dailogs/BatchModel";
import { BatchTable } from "@/components/DataTables/BatchTable";

export default function Batches() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-1">
        <h1 className="text-4xl font-bold text-center">Batches</h1>
        <BatchDialog/>
      </div>
      <BatchTable />
    </div>
  );
}