import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 px-4 bg-muted/20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2" data-testid="text-footer">
            © {new Date().getFullYear()} Visca Gyebi Afram
            {/* Built with
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            and Flutter expertise. */}
          </p>
          {/* <p className="text-muted-foreground text-sm">
            Crafted with React, TypeScript & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
}
