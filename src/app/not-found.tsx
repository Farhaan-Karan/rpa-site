import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="edge flex min-h-[70vh] items-center justify-center bg-ink text-paper">
      <div className="text-center">
        <div className="font-display text-[7rem] font-extrabold leading-none text-gold sm:text-[10rem]">
          404
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold">
          This rally went out of bounds.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
          back in the game.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/" variant="gold" arrow>
            Back home
          </ButtonLink>
          <ButtonLink href="/tournaments" variant="ghostLight">
            View tournaments
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
