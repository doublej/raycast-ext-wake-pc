import { showHUD, getPreferenceValues } from "@raycast/api";
import { execSync } from "child_process";

interface Preferences {
  macAddress: string;
}

export default async function Command() {
  const { macAddress } = getPreferenceValues<Preferences>();

  try {
    execSync(`wakeonlan ${macAddress}`);
    await showHUD("Magic packet sent");
  } catch {
    await showHUD("Failed to send magic packet. Is wakeonlan installed?");
  }
}
