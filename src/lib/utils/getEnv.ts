export function getEnv(name: string) {
  const envValue = process.env[name];

  if (!envValue) throw new Error(`Missing env value: ${name}`);

  return envValue;
}
