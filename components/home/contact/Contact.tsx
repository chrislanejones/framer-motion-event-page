import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SectionHeader } from "@/components/utils/SectionHeader";

export const Contact = () => {
  return (
    <section className="section-wrapper section" id="contact">
      <SectionHeader title="Contact" dir="l" />
      <div className="max-w-[700px] mx-auto rounded-[1.2rem]">
        <Reveal width="100%">
          <h4>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p>
            Have an idea to discuss? Shoot me an email if you want to connect!
            You can also find me on{" "}
            <Link href="" target="_blank" rel="nofollow">
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="" target="_blank" rel="nofollow">
              Skype
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:events@email.com">
            <div className="flex items-center space-x-4 justify-center gap-3.2 w-fit mx-auto transition duration-500 px-8 py-3 rounded-lg contactEmail">
              <MdEmail />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};


import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Here you can handle the form submission, e.g., send the data to a server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
