import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogDefault() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
        <video autoPlay  muted controls>
        <source src="/ai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          
        </DialogFooter>
      </Dialog>
      <div>
        <img className="mx-auto " src="/typecast.png" alt="image" />
        <Button
          className="mx-auto block mt-4"
          onClick={handleOpen}
          variant="gradient"
        >
          Open Video
        </Button>
      </div>
    </>
  );
}
