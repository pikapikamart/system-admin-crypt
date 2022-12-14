import { AppRouter } from "@/src/server/router";
import { createReactQueryHooks } from "@trpc/react";


export const trpc = createReactQueryHooks<AppRouter>();