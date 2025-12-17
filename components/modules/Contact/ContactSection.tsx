"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Loader } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { saveContactMessage } from "@/supabase/messages";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  subject: Yup.string().optional(),
  message: Yup.string().optional(),
});

export function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const result = await saveContactMessage({
          fullName: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        });

        if (result.success) {
          toast.success(
            "Message sent successfully! We'll get back to you soon."
          );
          resetForm();
        } else {
          toast.error(`Failed to send message: ${result.error}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Failed to send message. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section>
      <div className="mb-10">
        <h1 className="text-4xl text-foreground mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          We&apos;re here to answer any questions you may have. Reach out to us
          and we&apos;ll respond as soon as we can.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <Card className="border-border shadow-none py-0">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">DSWS Office</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Sundarikhali Rajbari, PO- Agarhati, <br /> PS-
                        Sandeshkhali, Dist.- North 24 Parganas
                        <br /> West Bengal, India. Pin - 743329
                      </p>
                    </div>
                  </div>
                  <Link
                    href="https://www.google.com/maps/dir//Sandeshkhali,+Agarhati,+Rajbari,+West+Bengal+743442/@23.674219,87.277855,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a021d39132872d1:0x8bdab46103fdef5d!2m2!1d88.7874799!2d22.4060481?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-green-500 font-semibold hover:text-green-600 hidden sm:block"
                    target="_blank"
                  >
                    Get Directions
                  </Link>
                </div>

                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        +91-9732009757 <br /> +91-960909260
                      </p>
                    </div>
                  </div>
                  <Link
                    href="tel:+919732009757"
                    className="text-green-500 font-semibold hover:text-green-600 hidden sm:block"
                  >
                    Call
                  </Link>
                </div>

                <div className="flex items-center justify-between p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <Link
                        href="mailto:contact@dsws.org"
                        className="text-muted-foreground text-sm leading-relaxed hover:underline"
                      >
                        contact@dsws.org
                      </Link>
                      <br />
                      <Link
                        href="mailto:info@dsws.org"
                        className="text-muted-foreground text-sm leading-relaxed hover:underline"
                      >
                        info@dsws.org
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="mailto:contact@dsws.org"
                    className="text-green-500 font-semibold hover:text-green-600 hidden sm:block"
                  >
                    Email
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <Card className="border-border shadow-none">
            <CardContent className="p-8 px-6 py-0">
              <form onSubmit={formik.handleSubmit} className="space-y-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    className="bg-muted/30"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-sm text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-muted/30"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Question about donations"
                    className="bg-muted/30"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-sm text-red-500">
                      {formik.errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    className="min-h-[150px] bg-muted/30 resize-none"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-sm text-red-500">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    variant={"primary"}
                    type="submit"
                    className="w-full"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </Button>
                  <p className="text-center text-muted-foreground text-xs mt-4">
                    We care about your data. Read our{" "}
                    <Link
                      href="#"
                      className="text-green-500 font-semibold hover:underline"
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
