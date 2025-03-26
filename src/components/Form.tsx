import React, { useState, useCallback, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatedTooltipPreview } from "./landingPage/footer/tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) return;

      setIsLoading(true);
      setStatus("Sending...");

      try {
        const response = await fetch("/api/contactme", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          const data = await response.json();
          setStatus(data.error || "Failed to send message. Please try again.");
        }
      } catch (error) {
        setStatus("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
    [formData]
  );

  useEffect(() => {
    if (status === "Message sent successfully!") {
      toast.success("Message sent successfully! 🎉", {
        position: "top-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else if (status && status !== "Sending...") {
      toast.error(status);
    }
  }, [status]);

  return (
    <div className="shadow-input mx-auto w-full min-w-[22rem] md:min-w-[28rem] bg-black p-4 rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-400">Want to hire me</h2>
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:space-y-0">
          <LabelInputContainer className="mb-4 space-y-3">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 space-y-">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="you@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 space-y-3 pt-4">
            <Label htmlFor="message">Your Message</Label>
            <Input
              id="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-lg dark:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={
            !formData.name || !formData.email || !formData.message || isLoading
          }
        >
          {isLoading ? "Sending..." : "Send Message"}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex space-x-5 justify-center mt-4">
          <AnimatedTooltipPreview />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
