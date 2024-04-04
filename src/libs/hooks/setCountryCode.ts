import { CountryType } from "@/types/types";
import ct from "countries-and-timezones";
import { useEffect, useState } from "react";

export const useCountriesByTimezone = (): Record<string, CountryType> => {
	const countries: Record<string, CountryType> = ct.getAllCountries();
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const [filteredCountries, setFilteredCountries] = useState<
		Record<string, CountryType>
	>({});

	// Filter countries by timezone
	useEffect(() => {
		const result: Record<string, CountryType> = {};
		for (const countryCode in countries) {
			if (countries.hasOwnProperty(countryCode)) {
				const country = countries[countryCode];
				if (country.timezones.includes(timezone)) {
					result[country.id] = country;
				}
			}
		}
		setFilteredCountries(result);
	}, [timezone]);

	return filteredCountries;
};
