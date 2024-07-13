const notes = [
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	},
	{
		name: 'local',
		created_at: Date.now(),
		updated_at: Date.now()
	}
];

/** @type {import('./$types').PageLoad} */
export function load() {
	return { notes };
}
