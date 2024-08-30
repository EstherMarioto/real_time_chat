type MessageReceivedProps = {
  message: string;
  timestamp?: string;
};

export function MessageReceived({
  message,
  timestamp = "06:20 PM",
}: MessageReceivedProps) {
  return (
    <div className="mb-2">
      <h6 className="bg-white rounded-lg rounded-ss-none p-3.5 text-message mb-1.5">
        {message}
      </h6>
      <h6 className="text-message text-xs font-light">{timestamp}</h6>
    </div>
  );
}
