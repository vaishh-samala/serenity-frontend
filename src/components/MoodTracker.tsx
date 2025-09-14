import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface MoodTrackerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MoodTracker = ({ open, onOpenChange }: MoodTrackerProps) => {
  const [responses, setResponses] = useState<{ [key: string]: number }>({});

  const questions = [
    { id: "overall", text: "How are you feeling overall today?" },
    { id: "stress", text: "How stressed do you feel?" },
    { id: "energy", text: "How's your energy level?" },
    { id: "sleep", text: "How well did you sleep last night?" },
    { id: "motivation", text: "How motivated do you feel?" },
  ];

  const moods = [
    { emoji: "😊", value: 5, label: "Great" },
    { emoji: "🙂", value: 4, label: "Good" },
    { emoji: "😐", value: 3, label: "Okay" },
    { emoji: "😔", value: 2, label: "Not great" },
    { emoji: "😢", value: 1, label: "Struggling" },
  ];

  const handleMoodSelect = (questionId: string, value: number) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    toast.success("Mood tracking saved successfully!");
    setResponses({});
    onOpenChange(false);
  };

  const isComplete = questions.every((q) => responses[q.id] !== undefined);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading">
            Daily Mood Check-In
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                {question.text}
              </p>
              <div className="flex justify-between gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => handleMoodSelect(question.id, mood.value)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                      responses[question.id] === mood.value
                        ? "bg-primary/10 border-2 border-primary"
                        : "hover:bg-muted border-2 border-transparent"
                    }`}
                  >
                    <span className="text-2xl mb-1">{mood.emoji}</span>
                    <span className="text-xs text-muted-foreground">
                      {mood.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isComplete}
              className="flex-1"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MoodTracker;
