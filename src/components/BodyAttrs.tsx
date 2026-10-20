"use client";

import { useEffect } from "react";

type BodyAttrsProps = {
  page: string;
  inner?: boolean;
};

export function BodyAttrs({ page, inner = false }: BodyAttrsProps) {
  useEffect(() => {
    document.body.dataset.page = page;
    document.body.classList.toggle("inner-page", inner);
    return () => {
      delete document.body.dataset.page;
      document.body.classList.remove("inner-page");
    };
  }, [page, inner]);

  return null;
}
