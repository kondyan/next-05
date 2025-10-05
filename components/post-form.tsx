"use client";

import FormSubmit from "@/components/form-submit";
import { useActionState } from "react";

type State = { errors?: string[] | undefined } | null;

export default function PostForm({
  action,
}: {
  action: (state: Awaited<State>, payload: FormData) => State | Promise<State>;
}) {
  const [state, formAction] = useActionState<State, FormData>(action, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <div className="form-actions">
          <FormSubmit />
        </div>
        {state?.errors && (
          <ul className="form-errors">
            {state?.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
