import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number, compact = false): string {
  if (compact) {
    if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(1)} Cr`
    if (value >= 1_00_000) return `₹${(value / 1_00_000).toFixed(1)} L`
    return `₹${value.toLocaleString('en-IN')}`
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-IN').format(value)
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '…' : str
}

export function calcEMI(principal: number, annualRate: number, tenureMonths: number): number {
  if (annualRate === 0) return principal / tenureMonths
  const r = annualRate / 12 / 100
  const n = tenureMonths
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

export function calcCapRate(noi: number, purchasePrice: number): number {
  return (noi / purchasePrice) * 100
}

export function calcCashOnCash(annualCashFlow: number, totalInvestment: number): number {
  return (annualCashFlow / totalInvestment) * 100
}

export function calcMonthlyCashFlow(
  monthlyRent: number,
  monthlyEMI: number,
  monthlyExpenses: number
): number {
  return monthlyRent - monthlyEMI - monthlyExpenses
}
