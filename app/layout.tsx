export const metadata = {
  title: "도와줘요 떡볶이맨",
  description: "떡볶이 창업 레시피 웹서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
