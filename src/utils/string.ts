export function keyToText(input: string): string {
  const formattedInput = input.replace(/([A-Z])/g, " $1");
  return formattedInput.charAt(0).toUpperCase() + formattedInput.slice(1);
}
