import logo from '/src/assets/logo.svg';
import alter from '/src/assets/alter.svg';
import logoJpg from '/src/assets/logo.jpeg';

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img src={logoJpg} alt="DevCrow Dynamics Logo" className="h-10 w-10" />
      <span className="text-white font-bold text-xl tracking-tight">DevCrow Dynamics</span>
    </div>
  );
}
