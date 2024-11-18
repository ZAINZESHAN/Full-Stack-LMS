import { UserDailog } from "@/components/Dailogs/UserDialog";
import { UserTrainerTable } from "@/components/DataTables/UserTable";

export default function Trainers() {
    return (
      <div className="min-h-screen p-10">
      <div className="flex justify-between my-1">
        <h1 className="text-4xl font-bold text-center">Trainer</h1>
        <UserDailog/>
      </div>
      <UserTrainerTable />
    </div>
    );
  }