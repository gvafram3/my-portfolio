export default function Footer() {
  return (
    <footer className="border-t py-8 px-4">
      <div className="w-full max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground" data-testid="text-footer">
          © {new Date().getFullYear()} Visca Gyebi Afram. Built with Flutter expertise and passion.
        </p>
      </div>
    </footer>
  );
}
