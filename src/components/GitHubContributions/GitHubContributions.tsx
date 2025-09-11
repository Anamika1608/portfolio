"use client";

import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <div className="w-full">
      <GitHubCalendar
        username="Anamika1608"
        colorScheme="light"
        fontSize={12}
        blockSize={12}
      />
    </div>
  );
};

export default GitHubContributions;