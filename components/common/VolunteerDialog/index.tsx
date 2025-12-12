"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Contact, User, Mail, Phone, LockKeyhole } from "lucide-react";
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
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email address").optional(),
  phone: Yup.string()
    .matches(
      /^(\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid Indian phone number"
    )
    .required("Phone number is required"),
  availability: Yup.string()
    .oneOf(
      ["weekends", "2-5hours", "flexible"],
      "Please select an availability option"
    )
    .required("Availability is required"),
  motivation: Yup.string()
    .min(10, "Please tell us a bit more (at least 10 characters)")
    .required("Please tell us why you want to volunteer"),
});

interface VolunteerDialogProps {
  children: React.ReactNode;
}

const availabilityOptions = [
  { value: "weekends", label: "Weekends Only" },
  { value: "2-5hours", label: "2-5 Hours/Week" },
  { value: "flexible", label: "Flexible" },
];

export function VolunteerDialog({ children }: VolunteerDialogProps) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      availability: "",
      motivation: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log("Volunteer application submitted:", values);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert(
          `Thank you for applying, ${values.fullName}! We'll contact you shortly at ${values.email}.`
        );

        resetForm();
        setOpen(false);
      } catch (error) {
        console.error("Error submitting application:", error);
        alert("Failed to submit application. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[84vh] overflow-y-auto p-4 text-black/80">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
            <Contact className="h-6 w-6" />
            Volunteer Application
          </DialogTitle>
          <DialogDescription className="text-sm">
            Help us to empower communities.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Jane Doe"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="pl-10 bg-muted/30"
                />
              </div>
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-sm text-red-500">{formik.errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="pl-10 bg-muted/30"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pl-10 bg-muted/30"
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-sm text-red-500">{formik.errors.phone}</p>
            )}
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Availability
            </label>
            <div className="flex flex-wrap gap-3">
              {availabilityOptions.map((option) => (
                <Button
                  variant={
                    formik.values.availability === option.value
                      ? "primary"
                      : "outline"
                  }
                  key={option.value}
                  type="button"
                  onClick={() => {
                    if (formik.values.availability === option.value) {
                      formik.setFieldValue("availability", "");
                    } else {
                      formik.setFieldValue("availability", option.value);
                    }
                  }}
                  className="px-6 py-2.5 text-sm font-medium transition-all duration-200"
                >
                  {option.label}
                </Button>
              ))}
            </div>
            {formik.touched.availability && formik.errors.availability && (
              <p className="text-sm text-red-500">
                {formik.errors.availability}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="motivation" className="text-sm font-medium">
              Why do you want to volunteer?
            </label>
            <Textarea
              id="motivation"
              name="motivation"
              placeholder="Tell us briefly about your motivation..."
              value={formik.values.motivation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-muted/30 resize-none min-h-[100px]"
            />
            {formik.touched.motivation && formik.errors.motivation && (
              <p className="text-sm text-red-500">{formik.errors.motivation}</p>
            )}
          </div>

          <Button
            variant={"primary"}
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full"
          >
            {formik.isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>

          <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1 mt-2">
            <LockKeyhole className="h-4 w-4" />
            Your information is safe with DSWS. We respect your privacy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
