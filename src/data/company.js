export const company = {
  name: "TransBay Xpress Inc.",
  shortName: "TransBay Xpress",
  businessType: "Trucking Company & Freight Brokerage",
  industry: "Transportation & Logistics",
  address: "18401 McKinley Ave, Manteca, CA 95337",
  phone: "(209) 410-4077",
  phoneHref: "+12094104077",
  usdot: "1357829",
  mc: "520713",
  operatingAuthority: "Authorized For Hire",
  operatingRegion: "Interstate — United States",
  fleetSize: 25,
  drivers: 25,
  cargo: [
    "General Freight",
    "Dry Bulk Commodities",
    "Beverages",
    "Paper Products",
    "Utilities",
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18401%20McKinley%20Ave%2C%20Manteca%2C%20CA%2095337",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Authority", href: "#authority" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "25", label: "Power Units", detail: "Company fleet" },
  { value: "25", label: "Professional Drivers", detail: "Experienced team" },
  { value: "48", label: "States Covered", detail: "Interstate operations" },
  { value: "24/7", label: "Dispatch Support", detail: "Operational readiness" },
];

export const services = [
  {
    icon: "truck",
    title: "Full Truckload Transportation",
    description:
      "Reliable truckload capacity for time-sensitive freight, supported by professional drivers and disciplined dispatch coordination.",
  },
  {
    icon: "route",
    title: "Interstate Freight",
    description:
      "Long-haul transportation across the continental United States with clear communication from pickup through delivery.",
  },
  {
    icon: "network",
    title: "Freight Brokerage",
    description:
      "Flexible capacity solutions that connect shippers with qualified carriers when additional coverage is required.",
  },
  {
    icon: "package",
    title: "General Freight",
    description:
      "Professional handling for general commodities, beverages, paper products, utilities-related freight, and more.",
  },
  {
    icon: "scale",
    title: "Dry Bulk Commodities",
    description:
      "Transportation support for eligible dry bulk commodity loads with a focus on compliance, planning, and safe execution.",
  },
  {
    icon: "headset",
    title: "Dedicated Dispatch Support",
    description:
      "Responsive shipment coordination, status visibility, and direct communication throughout the transportation lifecycle.",
  },
];

export const authorityItems = [
  {
    label: "USDOT Number",
    value: company.usdot,
    description: "Federal motor carrier registration identifier",
  },
  {
    label: "MC Number",
    value: company.mc,
    description: "Interstate operating authority identifier",
  },
  {
    label: "Operating Authority",
    value: company.operatingAuthority,
    description: "Commercial transportation authorization",
  },
  {
    label: "Operating Region",
    value: company.operatingRegion,
    description: "Interstate service throughout the United States",
  },
];
