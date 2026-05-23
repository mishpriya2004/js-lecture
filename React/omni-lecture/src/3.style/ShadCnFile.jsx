import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

let DATA = [
  {
    trigger: "What are your shipping options?",
    content:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
  },

  {
    trigger: "What is your return policy?",
    content:
      " Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    trigger: "How can I contact customer support?",
    content:
      "Reach us via email, live chat, or phone. We respond within 24 hours during business days.",
  },
];

export default function ShadCnFile() {
  return (
    <div className="flex items-center flex-col">
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="max-w-lg"
      >
        {/* <AccordionItem value="shipping">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem> */}
        {DATA.map((e) => {
          return (
            <AccordionItem value="shipping">
              <AccordionTrigger>{e.trigger}</AccordionTrigger>
              <AccordionContent>{e.content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <Accordion
                type="single"
                collapsible
                defaultValue="shipping"
                className="max-w-lg bg-gray-500 text-white"
              >
                {DATA.map((e) => {
                  return (
                    <AccordionItem value={e.trigger}>
                      <AccordionTrigger>{e.trigger}</AccordionTrigger>
                      <AccordionContent>{e.content}</AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
