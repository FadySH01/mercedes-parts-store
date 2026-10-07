export const partGuides = {
  'Body Parts': ['Front bumper assembly', 'Bonnet and front wings', 'Doors, mirrors and trim'],
  'Engines & Engine Parts': ['Oil and air filtration', 'Turbocharger and intake', 'Timing and engine mounts'],
  'Gearboxes & Transmission': ['Transmission service kits', 'Valve bodies and sensors', 'Torque converters and mounts'],
  'Mechanical & Underneath': ['Underbody shields', 'Drive shafts and joints', 'Exhaust and mounting parts'],
  'Suspension & Steering': ['Control arms and bushes', 'Shock absorbers and struts', 'Steering racks and tie rods'],
  'Braking Systems': ['Brake discs and pads', 'Calipers and hoses', 'ABS sensors and modules'],
  'Electrical & Electronic': ['Batteries and charging', 'Sensors and control modules', 'Wiring and switches'],
  'Interior Parts': ['Seats and upholstery', 'Dashboard and console trim', 'Cabin filters and controls'],
  'Lighting': ['Headlamp assemblies', 'Tail lamps and indicators', 'LED modules and bulbs'],
  'Cooling & AC': ['Radiators and water pumps', 'AC compressors', 'Fans, hoses and condensers'],
  'Wheels & Tyres': ['Alloy wheels', 'Tyres and pressure sensors', 'Wheel hubs and bearings'],
  'Accessories': ['Floor mats and luggage liners', 'Roof and cargo accessories', 'Exterior styling details'],
};

export const requestPartPath = (model, part) => `/request-part?${new URLSearchParams({model,part})}`;
