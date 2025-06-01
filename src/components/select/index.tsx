import * as React from "react";
import { Select } from "radix-ui";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const SelectInput = ({ label, placeholder, items, value, setValue }: { label: string, placeholder: string, items: Array<{value: string, text: string}>, value: any, setValue: any }) => (
	<Select.Root value={value} onValueChange={setValue}>
		<Select.Trigger className={styles.Trigger} aria-label={label}>
			<Select.Value placeholder={placeholder} />
			<Select.Icon className={styles.Icon}>
				<ChevronDownIcon />
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content className={styles.Content}>
				<Select.ScrollUpButton className={styles.ScrollButton}>
					<ChevronUpIcon />
				</Select.ScrollUpButton>
				<Select.Viewport className={styles.Viewport}>
					<Select.Group>
						<Select.Label className={styles.Label}>{label}</Select.Label>
						{items.map((item, index) => (
							<SelectItem key={index} value={item.value}>{item.text}</SelectItem>
						))}
					</Select.Group>
				</Select.Viewport>
				<Select.ScrollDownButton className={styles.ScrollButton}>
					<ChevronDownIcon />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
);

const SelectItem = React.forwardRef(
	({ children, className, ...props }: any , forwardedRef: any) => {
		return (
			<Select.Item
				className={`${styles.Item} ${className}`}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className={styles.ItemIndicator}>
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	},
);

export default SelectInput;
