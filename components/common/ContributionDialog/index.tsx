"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  amount: Yup.number()
    .min(1, "Amount must be at least ₹1")
    .required("Amount is required"),
  message: Yup.string().optional(),
});

interface ContributionDialogProps {
  children: React.ReactNode;
}

export function ContributionDialog({ children }: ContributionDialogProps) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      amount: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log("Donation form submitted:", values);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert(
          `Thank you for your donation of ₹${values.amount}! We'll contact you shortly.`
        );

        resetForm();
        setOpen(false);
      } catch (error) {
        console.error("Error submitting donation:", error);
        alert("Failed to process donation. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const predefinedAmounts = [500, 1000, 2500, 5000];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Heart className="h-6 w-6 text-red-500 fill-red-500" />
            Make a Donation
          </DialogTitle>
          <DialogDescription>
            Your contribution helps us make a difference in the community. Thank
            you for your support!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-muted/30"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-muted/30"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold">
                Phone <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="9876543210"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-muted/30"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-sm text-red-500">{formik.errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-semibold">
              Donation Amount (₹) <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {predefinedAmounts.map((amt) => (
                <Button
                  key={amt}
                  type="button"
                  variant={
                    formik.values.amount === amt.toString()
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => formik.setFieldValue("amount", amt.toString())}
                  className="h-9"
                >
                  ₹{amt}
                </Button>
              ))}
            </div>
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="Enter custom amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-muted/30"
            />
            {formik.touched.amount && formik.errors.amount && (
              <p className="text-sm text-red-500">{formik.errors.amount}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Leave a message..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-muted/30 resize-none min-h-[80px]"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="flex-1"
              variant={"primary"}
            >
              {formik.isSubmitting ? "Processing..." : "Donate Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
