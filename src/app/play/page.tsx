export default function PlayPage() {
  return (
    <div style={containerStyle}>
      <iframe
        src="/game/index.html"
        title="Blackjack Trainer"
        style={iframeStyle}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "#0b0b0b",
};

const iframeStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  border: "0",
};
