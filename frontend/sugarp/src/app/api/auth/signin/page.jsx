"use client";

import React, { useState, useEffect } from "react";

import Login from "@/sugarp/components/Login";
import LoginPage from "@/sugarp/pages/LoginPage";
import Head from "next/head";

export default function SignIn() {
  return (
    <div>
      <Head>
        <title>Título de la página personalizada</title>
        <meta
          name='description'
          content='Descripción de la página personalizada'
        />
      </Head>
      <LoginPage />
    </div>
  );
}
