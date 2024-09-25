import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function page() {
  return (
    <Dialog>
      <DialogTitle>Localisation</DialogTitle>
      <DialogContent>
        <div>
          L'activiation de votre localisation permettra de vous proposer des
          services plus adaptés à votre position.
        </div>
      </DialogContent>
    </Dialog>
  );
}
